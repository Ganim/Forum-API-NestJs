import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'

/* 
  Para iniciar o servidor digitar: pnpm nest start
  Para iniciar o prisma: pnpm prisma studio
  Lembrando que o DOCKER precisa estar aberto e rodando
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  })

  const envService = app.get(EnvService)
  const port = envService.get('PORT')

  await app.listen(port)
}
bootstrap()
