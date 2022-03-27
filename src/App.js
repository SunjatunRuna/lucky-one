import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className='container my-5 text-secondary'>
      <p className='p-3 border mb-5 border-mute text-start'><span className='fw-bold'>How react works? </span><br />
      রিয়েক্ট হলো জাভাস্ক্রিপ্ট লাইব্রেরি। এটা দিয়ে ইউজার ইন্টারফেস তৈরী করা যায়। 
        সিঙ্গেল পেইজ অ্যাপ্লিকেশন তৈরীতে রিয়েক্ট ব্যবহার করা হয়। রিয়েক্ট একমুখী ডেটা প্রবাহ করে। 
        যখন একটি রিয়েক্ট অ্যাপ তৈরী করা হয় তখন এর parent and child কম্পোনেন্ট এর মধ্যে কানেকশন তৈরী করতে হয়। 
        রিয়েক্ট অ্যাপ এ বাগ সহজে সমাধান করা যায়।</p>
        <p className='p-3 border border-mute text-start'>
          <span className='fw-bold'>Difference between props and state.</span><br /> 
        Props এর ভ্যালু পরিবর্তন করা যায় না। 
        এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট এ ডেটা পাস করতে ব্যবহার করা হয়। 
        props শুধুমাত্র পড়া যায়।অন্যদিকে State এর ভ্যালু পরিবর্তন করা যায়। 
        এর পরিবর্তনগুলো অ্যাসিনক্রোনাস অনুযায়ী হয়। 
        আর এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট এ ডেটা পাস করা যায় নাহ।</p>
      </div>
    </div>
  );
}

export default App;
