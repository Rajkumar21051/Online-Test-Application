import { Component, OnInit, ɵresetJitOptions } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
 public name : String= "";
 public questionList : any=[];
 public currentQuestion : number =0;
 public points:number=0;
 counter=60;
 correctAnswer:number=0;
 inCorrectAnswer:number=0;
 isTestCompleted:Boolean=false;
  constructor(private questionService:QuestionService ) { }

  ngOnInit(): void {
this.name = localStorage.getItem("name")!;
this.getAllQuestions();

  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }
  refresh(){
    this.currentQuestion;
  }
  nextQuestion(){
    this.currentQuestion++;
  }
  preQuestion(){
    this.currentQuestion--;
  }
  answer(currentqn:number,option:any){
    if(currentqn===this.questionList.length){
      this.isTestCompleted=true;
    }
if(option.correct){
  this.points +=10;
  this.correctAnswer++;
  setTimeout(()=>{
    this.currentQuestion++;
  },1000)
    

  
}else{
  
  setTimeout(()=>{
    this.currentQuestion++;
    this.inCorrectAnswer++;

  },1000)
   
this.points-=10;
  
  
}
  }
}
