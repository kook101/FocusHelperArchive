int pushButtonA = 2;
int pushButtonB = 3;

boolean activated = false;//basic status is false 

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(pushButtonA, INPUT);
  pinMode(pushButtonB, INPUT);
}

void loop() {

int buttonStateA = digitalRead(pushButtonA);
int buttonStateB = digitalRead(pushButtonB);

if(buttonStateA == HIGH ){
  Serial.write(pushButtonA);
  
  activated = true;
}else if(buttonStateB == HIGH){
  Serial.write(pushButtonB);
  
 activated = true;
}else if(buttonStateA == LOW || buttonStateB == LOW){
  Serial.write(0);
 activated = false;
}


//Serial.println(buttonStateA);
//Serial.println(buttonStateB);
//delay(50);
}
