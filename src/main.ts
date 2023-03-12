import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
<<<<<<< HEAD
=======

>>>>>>> ab123303feec318444c5af87490c47b7ad9aad06

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
<<<<<<< HEAD
        maxAge: 30000
      }
    }),
  );






=======
        maxAge: 300000
      }
    }),
  );
>>>>>>> ab123303feec318444c5af87490c47b7ad9aad06
  await app.listen(3000);
}
bootstrap();