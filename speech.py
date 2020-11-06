import speech_recognition as sp
import time
import difflib as dl 
with open(r'C:\Users\Uday\Desktop\sp\Questions\Question.txt') as fp:
	a = fp.read()
with open(r'C:\Users\Uday\Desktop\sp\sample.txt') as fp:
	b = fp.read()

r = sp.Recognizer()
rp = open('sample.txt', 'w')
data = []
def rec():
	with sp.Microphone() as source:
		print("Question: ")
		print("Start speaking")
		#audio= r.record(source, duration = 5)
		audio = r.listen(source)
		text=r.recognize_google(audio)
		data.append(text)
rec()
print("saved to text file")
	#time.sleep(5)

for j in range (len(data)):
	rp.write(str(data[j]))
rp.close()

#checking similarity

sim = dl.get_close_matches

s = 0
wa = a.split()
wb = b.split()

for i in wa:
    if sim(i, wb):
        s += 1

n = float(s) / float(len(wa))
simscore = (n * 100)
print ('%d%% similarity' % int(simscore))

if simscore > 50:
	print("Please do not repeat the question!")



