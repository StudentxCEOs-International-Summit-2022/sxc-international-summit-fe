## Developing step

NextJS docs: https://nextjs.org/docs
ChakraUI docs: https://chakra-ui.com/guides/first-steps
ReactJS docs: https://reactjs.org/docs/getting-started.html

### First, clone and add repository as origin:

```bash
git clone https://github.com/StudentxCEOs-International-Summit-2022/sxc-international-summit-fe.git
git remote add origin https://github.com/StudentxCEOs-International-Summit-2022/sxc-international-summit-fe.git
```

### Second, work in branch repository

```bash
git branch <branch-name>
git checkout <branch-name>
```

or simply use
```bash
git checkout -b <branch-name>
```

For best practice, use "feature/<name>" for new feature and "fix/<name>" for bugfixing

### Third, make sure you pulled everything from origin branch before coding to prevent conflicts

```bash
git pull origin main
```

If there are some conflict, resolve it manually by reading and change the code

### Fourth, commit and push your work

```bash
git add.
git commit -m "<your commit message>"
git push origin <branch-name>
```

### Last, if all work is done, make a pull request and request review
