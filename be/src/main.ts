import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from "socket.io";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const io = new Server(app);

  app.enableCors();

  io.on('connection', (socket) => {
    console.log('a user has connected');
  });

  await app.listen(3000);
}

bootstrap();
