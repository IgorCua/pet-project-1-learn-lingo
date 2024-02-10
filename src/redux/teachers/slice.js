import { createSlice } from "@reduxjs/toolkit";
import { getTeachersList } from "./operations";

const initialState = {
    teachersList: {
      "-NoIE4Slkr9NCsw2CbRH": {
          "avatar_url": "https://ftp.goit.study/img/avatars/1.jpg",
          "conditions": [
              "Teaches only adult learners (18 years and above).",
              "Flexible scheduling options available."
          ],
          "experience": "John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels.",
          "languages": [
              "English",
              "Spanish"
          ],
          "lesson_info": "The lessons focus on improving speaking and listening skills through interactive activities and discussions.",
          "lessons_done": 1375,
          "levels": [
              "A1 Beginner",
              "A2 Elementary",
              "B1 Intermediate",
              "B2 Upper-Intermediate",
              "C1 Advanced",
              "C2 Proficient"
          ],
          "name": "John",
          "price_per_hour": 25,
          "rating": 4.5,
          "reviews": [
              {
                  "comment": "John is an excellent teacher! I highly recommend him.",
                  "reviewer_name": "Alice",
                  "reviewer_rating": 5
              },
              {
                  "comment": "John is very knowledgeable and patient. I enjoyed his classes.",
                  "reviewer_name": "Bob",
                  "reviewer_rating": 4
              }
          ],
          "surname": "Doe"
      },
      "-NoIEAApCZugVYA6ys0S": {
          "avatar_url": "https://ftp.goit.study/img/avatars/2.jpg",
          "conditions": [
              "Welcomes both adult learners and teenagers (13 years and above).",
              "Provides personalized study plans."
          ],
          "experience": "Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor's degree in German Studies and a Master's degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey.",
          "languages": [
              "French",
              "German"
          ],
          "lesson_info": "Lessons are structured to cover grammar, vocabulary, and practical usage of the language.",
          "lessons_done": 1098,
          "levels": [
              "A1 Beginner",
              "A2 Elementary",
              "B1 Intermediate",
              "B2 Upper-Intermediate"
          ],
          "name": "Jane",
          "price_per_hour": 30,
          "rating": 4.8,
          "reviews": [
              {
                  "comment": "Jane is an amazing teacher! She is patient and supportive.",
                  "reviewer_name": "Eve",
                  "reviewer_rating": 5
              },
              {
                  "comment": "Jane's lessons were very helpful. I made good progress.",
                  "reviewer_name": "Frank",
                  "reviewer_rating": 4
              }
          ],
          "surname": "Smith"
      }
  },
  listID: '',
  isLoading: false,
  error: null,
  filter: {}
}

const teachersSlice = createSlice({
    name: 'teachers',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTeachersList.fulfilled, (state, action) => {
                state.teachersList = {...state.teachersList, ...action.payload.list};
                state.listID = action.payload.id;
            })
            .addMatcher(action => action.type.startsWith('teachers') && action.type.endsWith('/pending'), (state, _) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(action => action.type.startsWith('teachers') && action.type.endsWith('/rejected'), (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default teachersSlice.reducer;