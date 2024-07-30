// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { PerformedWorkout } from './schema/performedWorkout.schema';
// import { PerformedWorkoutDto } from './dto';
// import { AppError } from 'src/shared/error/AppError';
// import { HttpStatus, Injectable } from '@nestjs/common';

// @Injectable()
// export class MongoWorkoutRepository {
//   constructor(
//     @InjectModel('Workout') private readonly model: Model<PerformedWorkout>
//   ) {}

//   async savePerformed(id: string, performedWorkoutDto: PerformedWorkoutDto) {
//     try {
//       const performedWorkout = new this.model({
//         userId: id,
//         date: new Date(performedWorkoutDto.date),
//         ...performedWorkoutDto
//       });

//       await performedWorkout.save();
//     } catch (error) {
//       throw new AppError(
//         'Error on saving performed workout',
//         HttpStatus.BAD_REQUEST
//       );
//     }
//   }

//   deleteWorkouts() {
//     return this.model.deleteMany();
//   }
//   async listPerformedWorkouts(id: string) {
//     return await this.model.find({ userId: id });
//   }
// }
