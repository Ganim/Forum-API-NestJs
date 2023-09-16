import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { EnvService } from '../env/env.service'
import { EnvModule } from '../env/env.module'

/* 
  Instalar os seguintes módulos:
    pnpm i @nestjs/passport @nestjs/jwt
*/

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [EnvModule],
      inject: [EnvService],
      global: true,
      useFactory(env: EnvService) {
        const privateKey = env.get('JWT_PRIVATE_KEY')
        const publicKey = env.get('JWT_PUBLIC_KEY')
        return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
        }
      },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtStrategy,
    EnvService,
  ],
})
export class AuthModule {}

/*
  Para criar a chave publica e a chave privada, rodar o comando usando o terminal UBUNTU WSL

  # Gerar a chave privada
    openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048

  # Gerar a chave pública
    openssl rsa -pubout -in private.key -out public.key -outform PEM

  # Converter a chave privada para base64
    JWT_PRIVATE_KEY=$(openssl base64 -in private.key -A)

  # Converter a chave pública para base64
    JWT_PUBLIC_KEY=$(openssl base64 -in public.key -A)

  # Adicionar as chaves ao arquivo .env
    echo "JWT_PRIVATE_KEY=\"$JWT_PRIVATE_KEY\"" >> .env
    echo "JWT_PUBLIC_KEY=\"$JWT_PUBLIC_KEY\"" >> .env

  # Remover os arquivos de chave
    rm private.key public.key
*/
