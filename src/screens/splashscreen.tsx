import React, { forwardRef, useMemo } from 'react';

// Externals
import { animated, config, useSpring } from '@react-spring/web';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import seedrandom from 'seedrandom';
import { Box, Flex, Heading, Paragraph } from 'theme-ui';

interface Quote {
  author: string;
  quote: string;
}

interface SplashScreenProps {
  onReady: () => void;
}

const SplashScreen = forwardRef<HTMLDivElement, SplashScreenProps>(({ onReady }, ref) => {
  const quote = useMemo<Quote>(() => {
    const date = new Date();
    const seed = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    return quotes[Math.floor(seedrandom(seed).quick() * quotes.length)];
  }, []);

  const [text, { isDone }] = useTypewriter({
    loop: 1,
    words: [quote.quote],
    onLoopDone: () => setTimeout(onReady, 2500)
  });

  const styles = useSpring({
    delay: 750,
    config: { duration: 500, ...config.default },
    opacity: isDone ? 1 : 0
  });

  return (
    <Flex
      as="div"
      ref={ref}
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 4,
        height: '100svh',
        width: '100svw'
      }}
    >
      <Heading as="h2" sx={{ color: 'primary', width: 'fit-content' }}>
        <Box as="span">{text}</Box>
        <Cursor />
      </Heading>
      <animated.div style={styles}>
        <Paragraph sx={{ color: 'secondary', width: 'fit-content' }}>{quote.author}</Paragraph>
      </animated.div>
    </Flex>
  );
});

const quotes: Quote[] = [
  {
    author: 'Alan Turing, pioneer of computer science',
    quote: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.'
  },
  {
    author: 'Edsger W. Dijkstra, Dutch systems scientist',
    quote: 'Simplicity is prerequisite for reliability.'
  },
  {
    author: 'Grace Hopper, creator of the first compiler',
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'"
  },
  {
    author: 'Linus Torvalds, creator of Linux',
    quote: 'Talk is cheap. Show me the code.'
  },
  {
    author: 'Dennis Ritchie, co-creator of UNIX and C',
    quote: 'UNIX is simple. It just takes a genius to understand its simplicity.'
  },
  {
    author: 'Bjarne Stroustrup, creator of C++',
    quote:
      'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off.'
  },
  {
    author: 'Ken Thompson, co-creator of UNIX',
    quote: 'When in doubt, use brute force.'
  },
  {
    author: 'Donald Knuth, father of algorithm analysis',
    quote: 'Premature optimization is the root of all evil.'
  },
  {
    author: 'Steve Jobs, co-founder of Apple Inc.',
    quote: 'Innovation distinguishes between a leader and a follower.'
  },
  {
    author: 'Bill Gates, co-founder of Microsoft',
    quote: 'Your most unhappy customers are your greatest source of learning.'
  },
  {
    author: "Brian Kernighan, co-author of 'The C Programming Language'",
    quote: 'Debugging is twice as hard as writing the code in the first place.'
  },
  {
    author: 'Martin Fowler, software developer and author',
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
  },
  {
    author: 'Tim Berners-Lee, inventor of the World Wide Web',
    quote: 'The Web does not just connect machines, it connects people.'
  },
  {
    author: "Ada Lovelace, world's first computer programmer",
    quote: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.'
  },
  {
    author: 'Rob Pike, co-creator of Go language',
    quote: "Rule of Programming: Don't Panic."
  },
  {
    author: 'Paul Graham, co-founder of Y Combinator',
    quote: 'Keep it simple. Beauty lies in simplicity.'
  },
  {
    author: 'Marissa Mayer, former CEO of Yahoo',
    quote: "I always did something I was a little not ready to do. I think that's how you grow."
  },
  {
    author: 'Jeff Atwood, co-founder of Stack Overflow',
    quote: 'Any application that can be written in JavaScript, will eventually be written in JavaScript.'
  },
  {
    author: 'Guido van Rossum, creator of Python',
    quote: 'Code is read much more often than it is written.'
  },
  {
    author: 'James Gosling, creator of Java',
    quote: 'Java is C++ without the guns, knives, and clubs.'
  },
  {
    author: 'Larry Wall, creator of Perl',
    quote: 'Easy things should be easy, and hard things should be possible.'
  },
  {
    author: 'John Carmack, lead programmer of Doom',
    quote: "Focus is a matter of deciding what things you're not going to do."
  },
  {
    author: 'Doug Cutting, creator of Hadoop',
    quote: 'People are more complicated than code or hardware.'
  },
  {
    author: 'Brendan Eich, creator of JavaScript',
    quote: 'Always bet on JavaScript.'
  },
  {
    author: 'Kent Beck, creator of Extreme Programming',
    quote: "I'm not a great programmer; I'm just a good programmer with great habits."
  },
  {
    author: 'Yukihiro Matsumoto, creator of Ruby',
    quote: 'For me, the purpose of life is partly to have joy.'
  },
  {
    author: 'Ward Cunningham, inventor of the wiki',
    quote: 'Clean code is code that is easy to understand and easy to change.'
  },
  {
    author: 'Miguel de Icaza, founder of GNOME',
    quote: 'Embrace constraints.'
  },
  {
    author: 'Linus Torvalds, creator of Git',
    quote: "Software is like sex: it's better when it's free."
  },
  {
    author: 'Scott Hanselman, programmer and teacher',
    quote: 'With great power comes great responsibility.'
  },
  {
    author: 'Rich Hickey, creator of Clojure',
    quote: 'Programs must be written for people to read, and only incidentally for machines to execute.'
  },
  {
    author: 'Kent Beck, advocate of Test-Driven Development',
    quote: 'Optimism is an occupational hazard of programming; feedback is the treatment.'
  },
  {
    author: 'Rob Pike, contributor to Unix and Go',
    quote: 'Simplicity is complicated.'
  },
  {
    author: 'Edsger W. Dijkstra, programmer and physicist',
    quote: 'Testing shows the presence, not the absence of bugs.'
  },
  {
    author: 'Larry Page, co-founder of Google',
    quote: 'Always deliver more than expected.'
  },
  {
    author: 'Mark Zuckerberg, co-founder of Facebook',
    quote: 'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.'
  },
  {
    author: 'Bill Joy, co-founder of Sun Microsystems',
    quote: 'The power of a network grows exponentially as the number of users increases.'
  },
  {
    author: 'Jamie Zawinski, Netscape programmer',
    quote:
      "Some people, when confronted with a problem, think 'I know, I'll use regular expressions.' Now they have two problems."
  },
  {
    author: 'Phil Karlton, Netscape engineer',
    quote: 'There are only two hard things in Computer Science: cache invalidation and naming things.'
  },
  {
    author: 'Linus Torvalds, open-source advocate',
    quote: 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.'
  },
  {
    author: 'David Heinemeier Hansson, creator of Ruby on Rails',
    quote: 'Ruby is rubbish! PHP is phpantastic!'
  },
  {
    author: 'Scott Hanselman, technology educator',
    quote: "There's a lot of excitement about artificial intelligence, and it's not just misplaced optimism."
  },
  {
    author: 'Brendan Eich, technologist and futurist',
    quote: "JavaScript is everywhere and it's the lingua franca of the web."
  },
  {
    author: 'Jeff Bezos, founder of Amazon',
    quote: 'If you build a great experience, customers tell each other about that. Word of mouth is very powerful.'
  },
  {
    author: 'Sundar Pichai, CEO of Google',
    quote: 'Wear your failure as a badge of honor and start again.'
  },
  {
    author: 'Satya Nadella, CEO of Microsoft',
    quote: 'Our industry does not respect tradition—it only respects innovation.'
  },
  {
    author: 'Sergey Brin, co-founder of Google',
    quote: 'Solving big problems is easier than solving little problems.'
  },
  {
    author: 'Tim Cook, CEO of Apple',
    quote: 'Let your joy be in your journey—not in some distant goal.'
  },
  {
    author: 'Evan Williams, co-founder of Twitter',
    quote: 'If you’re successful, it changes things, and you have to adapt.'
  },
  {
    author: 'Barbara Liskov, pioneer in programming languages',
    quote: 'Modularity based on abstraction is the way things get done.'
  },
  {
    author: 'James Gosling, father of Java',
    quote: 'The next generation of interesting software will be done on the Macintosh, not the IBM PC.'
  }
];

export default SplashScreen;
