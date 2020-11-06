# Radioactive

Introduction - 

Our team Radioactive is group of 5 students from the third year of Computer Science and Engineering from CMR Technical Campus. We decided to participate in this hackathon to add value to the lives of people in the society with the limited knowledge that we have. We see this Gov Tech-thon as a great opportunity to contribute to the society. 


Problem statement description:

With all the exams being conducted online and with increasing difficulty to monitor all the students at the same time, creates a lot of room for students to cheat in exams. Some of the major malpractices are: some other person writing the exams, using devices to cheat, multiple people to help the person to write exam.


The COVID-19 pandemic has forced the majority of the organizations to either shut-down or to work remotely, including educational institutions. Every institution is adapting to a new way of teaching online. But conducting a proper examination is still a herculean task. Exams help a lot to bring an improvement in the individual's knowledge because they provide regular feedback to the students allowing them to acknowledge their shortcomings and work on them and remote proctored exam has enabled us to write any exam by sitting anywhere in the world. All you need is a mobile device and an internet connection. And it is the need of the hour. We can utilize the technologies existing in the current market and make it more effective. We need to make sure that the people who take exams do not cheat or breach ethics during the exam and hence the deserved gets the credit. We would like to achieve this motto through our solution. We see this as an opportunity to revolutionize remotely proctored examinations. 


About datasets and pretrained models:

1.	Haar-Cascades 

2.	DAiSEE dataset

3.	Inception model

Haar Cascade classifiers are an effective way for object detection. We will use this to identify faces and manipulate them. They are a great choice because they’re pre-trained and easy to implement. In our system, we will need to identify faces from the camera feed hence it will be a great add-on to the system.

DAiSEE dataset, the first multi-label video classification dataset comprising of 9068 video snippets captured from 112 users for recognizing the user affective states of boredom, confusion, engagement, and frustration "in the wild". The dataset has four levels of labels namely - very low, low, high, and very high for each of the affective states, which are crowd annotated and correlated with a gold standard annotation created using a team of expert psychologists. This dataset is perfect for us to track the user’s attentive states which ca help us gain better insights of the statistics.
Inception model architecture is a type of convolutional neural network architecture which is pre-trained on facial images so that it learns features most common among facial images and we use the pretrained model to fit our own images and use it as per our requirement. We have opted a pretrained model instead of training it from scratch because training an inception model is computationally expensive.


System requirements- 

Client end-

Windows XP/Any linux or Macos

Web browser preferably chrome


Server side-

The server storage will determine its speed. The requirement will be based on clients request hence this will vary from server to server. The minimum storage is 8gb.

About our prototype-

Our prototype is a web application which is an unsupervised tool for tests online. It has a homepage which has a toggle button between admin and the candidate. The candidate can view the various options such as help, the features of the tool etc. The candidate needs to register using the register now button to write further tests.
During the registration process the candidate has to provide his basic credentials which are checked if they’re valid or not. While registering the candidate is prompted to click a live picture on the registering page which will then be saved in the connected database. His email/phone number will be his login credentials. All the fields are mandatory and the data is validated dynamically. 
The candidate will then be redirected to the login page where his basic credentials are authenticated with the data provided by the candidate while registering. The page will again prompt the candidate to click a picture which will then be verified with the picture which is saved in the database which was clicked during the registration process thus authenticating him and allowing him to enter the test page. This is done using One shot or Few Shot learning approach which is an object categorization problem which is found in Computer Vision. Most machine learning models require training on hundreds or thousands of sample/images and very large datasets but one shot learning uses very few training samples/images with high accuracy.

This face recognition goes on throughout the test so that the candidate cannot swap or switch with another person.

Throughout the test, the tool will continuously keep recording the audio and will process the speech and compares it with the question being displayed on the screen. If there’s a match above certain threshold the tool will raise a warning intimating the user to not speak about the question.
The tool will detect faces in the webcam feed and if no face is found for a certain time it will give an alert asking the user to return to the screen and if there are multiple faces in the screen then it will again alert the candidate that multiple faces are detected which is not allowed.
If the candidate tries to switch the tab then he is alerted with a note as well as a notification and an audio.

collaborators :  [Abhinav Joel](https://github.com/AbhinavJoel), [Saichand](https://github.com/chandu381144), [Sundeep Varma](https://github.com/Agastya8), [Roshan Dominic](https://github.com/roshan-dominic), [Uday Sai](https://github.com/Uday47).
