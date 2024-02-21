import { createSlice } from "@reduxjs/toolkit";
import { getTeachersList, getFilteredTeachersList } from "./operations";

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
        },
        "-NoIEC_JFotYWXwcyS9_": {
            "avatar_url": "https://ftp.goit.study/img/avatars/3.jpg",
            "conditions": [
                "Teaches all age groups, including children, teenagers, and adults.",
                "Offers group lessons at discounted rates."
            ],
            "experience": "David has been teaching Mandarin Chinese for 4 years. He has a passion for language teaching and is dedicated to helping his students succeed. With a solid understanding of the language and culture, David ensures that his lessons are both informative and enjoyable.",
            "languages": [
                "Mandarin Chinese"
            ],
            "lesson_info": "Lessons focus on developing all four language skills: speaking, listening, reading, and writing.",
            "lessons_done": 1203,
            "levels": [
                "A1 Beginner",
                "A2 Elementary",
                "B1 Intermediate"
            ],
            "name": "David",
            "price_per_hour": 35,
            "rating": 4.2,
            "reviews": [
                {
                    "comment": "David explains things clearly and is knowledgeable in the subject.",
                    "reviewer_name": "Grace",
                    "reviewer_rating": 4
                },
                {
                    "comment": "David's teaching style didn't suit me, but he is still a good teacher.",
                    "reviewer_name": "Henry",
                    "reviewer_rating": 3
                }
            ],
            "surname": "Johnson"
        },
        "-NoIEEveXw3oNmDCoUix": {
            "avatar_url": "https://ftp.goit.study/img/avatars/4.jpg",
            "conditions": [
                "Teaches adults and teenagers (15 years and above).",
                "Flexible lesson timings available."
            ],
            "experience": "Sarah has been teaching English for 6 years. She has worked with students from diverse backgrounds and understands the challenges they face while learning a new language. Her teaching approach emphasizes practical communication skills and ensures a supportive and engaging learning environment.",
            "languages": [
                "English"
            ],
            "lesson_info": "Lessons focus on building conversational skills and grammar knowledge.",
            "lessons_done": 1120,
            "levels": [
                "A1 Beginner",
                "A2 Elementary",
                "B1 Intermediate"
            ],
            "name": "Sarah",
            "price_per_hour": 28,
            "rating": 4.6,
            "reviews": [
                {
                    "comment": "Sarah is a patient and helpful teacher. I enjoyed her lessons.",
                    "reviewer_name": "Emily",
                    "reviewer_rating": 4
                },
                {
                    "comment": "Sarah's teaching style is engaging and effective. Highly recommended.",
                    "reviewer_name": "Alex",
                    "reviewer_rating": 5
                }
            ],
            "surname": "Johnson"
        }
    },
    responseLength: null,
    listID: '-NoIEHDvKejIrTRsQBB4',
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
                state.responseLength = action.payload.length;
            })
            .addCase(getFilteredTeachersList.fulfilled, (state, action) => {
                state.teachersList = action.payload;
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