# Homework Submission Process

## Setup (One Time Only!)
- Go to the class homework Github repo at [https://github.com/ga-students/wdi-atx-3-hw](https://github.com/ga-students/wdi-atx-3-hw)
- Fork the repo by clicking the "Fork" button in the top right hand corner of the page
- Open your terminal
- `cd` into your `~/code/wdi` directory
- Go back to Github and copy the "SSH clone URL" on the right side of the page
- Back in the terminal, type `git clone the-SSH-clone-URL-you-just-copied`. Obviously replace the last part with the URL you copied, not those words :)
- Go back to the original class HW repo at [https://github.com/ga-students/wdi-atx-3-hw](https://github.com/ga-students/wdi-atx-3-hw)
- Copy the SSH clone URL for that repo as well (same spot as the last one on the page)
- In your terminal, type `git remote add upstream the-SSH-clone-URL-of-the-main-repo`. Obviously replace the last part with the URL you just copied.

## Daily HW Download and Submission
- Open up your terminal. `cd` into the directory for your local homework repo.
- Make sure you're on the master branch of the repo - the prompt should say `master` towards the end. If you're not on the master branch, run `git checkout master` (this command won't destroy anything if you run it by mistake).
- Make sure you have all your changes saved and committed. To check, you can run `git status`. If you see any untracked, modified, or uncommitted files, run `git add the-paths-of-the-files-you-want-to-add` and then `git commit -m "Your commit message describing what you're committing"`.
- Now that your local repo is all tidy, we can download the assignment from the main class repo. To do that, run `git pull upstream master`. This tells git to `pull` (`fetch` and `merge` together) the assignment from the `master` branch of the `upstream` repo, which in our case is the shared class repo.
- Go to the folder for the appropriate week and day of that day's assignment (`w01/d03` for Wednesday of week 1, for example). Open up the files in the `starter` folder in Sublime. Begin working on those files to complete your homework.
- Once you're done with your homework, `git add` and `git commit` the changes you've made to the `starter` files.
- To push the changes up to your forked homework repo on Github, run `git push`
- Finally, to submit your homework to the instructors, you'll need to complete a "Pull Request".
    - In your browser, go to your forked homework repo on github.com. Find the green "Pull Request" button with 2 arrows circling each other next to the branch name. Click it.
    - Make sure the "base fork" says "ga-students/wdi-atx-2-hw" and the branch is "master". The "head fork" should be your forked repo, still on the master branch.
    - Click "Create Pull Request". Give the Pull Request a title of the format "w01d03 hw", where "w01" represents the current week, and "d03" represents the current day.
    - In the comment for the Pull Request, please note your comfort level on a scale of 1-5 (5 being most comfortable), and the completeness level on a scale of 1-5 (5 being totally complete) with the homework. You may include any other important info about this homework submission here.
    - Click "Create pull request" at the bottom, and you're done!
