import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

/* 
  Para iniciar o servidor digitar: pnpm nest start
  Para iniciar o prisma: pnpm prisma studio
  Lembrando que o DOCKER precisa estar aberto e rodando
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  })

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  const port = configService.get('PORT', { infer: true })

  await app.listen(port)
}
bootstrap()
