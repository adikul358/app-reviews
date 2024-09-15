export default function refreshJob(job, done) {
    setTimeout(() => {
        console.log(job.data);
        done();
    }, 5000);
}