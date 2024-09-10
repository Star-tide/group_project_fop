import { useState } from "react";
import { useParams } from "react-router-dom"
import { addQuestionToCourse } from "../utils/utils";

export const AddQuestion = ({courseQuestions, setCourseQuestions}) => {

    const [loading, setLoading] = useState(false)
    const { course_id } = useParams();
    // class Question(models.Model):
    // course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    // learning_content = models.TextField()
    // prompt = models.TextField()
    // solution = models.TextField()
    // is_correct = models.BooleanField(default = False)

    const handleSubmit = async (event) => {
      event.preventDefault();
      let formData = new FormData(event.target);
      formData.append("id", course_id)
      setLoading(true)
     const success =  await addQuestionToCourse(formData)
      if (success == 1) {
        alert('Question added')
        setLoading(false)
        let newQuestion = {
            "course": formData['id'],
            "learning_content": formData['learning_content'],
            "prompt": formData['prompt'],
            "solution": formData['solution'],
            "is_correct": false 
        }
        setCourseQuestions([...courseQuestions, newQuestion])
      }

    };

    if(loading) {
        return <>Loading...</>
    }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-30 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-secondary">
            Add a new Question
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="prompt"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prompt
              </label>
              <div className="mt-2">
                <input
                  id="prompt"
                  name="prompt"
                  type="prompt"
                  required
                  autoComplete="prompt"
                  className="block w-full textarea rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="solution"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Solution
              </label>
              <div className="mt-2">
                <input
                  id="solution"
                  name="solution"
                  type="solution"
                  required
                  autoComplete="solution"
                  className="block textarea w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="learning_content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Learning Content
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="learning_content"
                  name="learning_content"
                  type="learning_content"
                  required
                  autoComplete="learning_content"
                  className="block w-full textarea rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-accent shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


// class Course(models.Model):
//     difficulty = models.IntegerField(validators=[v.MaxValueValidator(3), v.MinValueValidator(1)])
//     title = models.CharField(max_length=255)
//     subcategories = ArrayField(models.CharField(), default=list, blank=True)
//     prerequisites = ArrayField(models.CharField(), default=list, blank=True)
//     course_description = models.TextField(max_length=500)
//     #users = models.ManyToManyField(User)

// class Question(models.Model):
//     course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
//     learning_content = models.TextField()
//     prompt = models.TextField()
//     solution = models.TextField()
//     is_correct = models.BooleanField(default = False)

// class Answer(models.Model):
//     user_solution = models.CharField()
//     question = models.OneToOneField(Question, on_delete=models.CASCADE)