import logo from "./img/ntiloga.png"
import { createStyles, Container, Center, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'block',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
        <Center>
            <Container className={classes.inner}>
                <a href="https://www.ntigymnasiet.se/johanneberg/" className={classes.inner}>
                    <Image 
                        src={logo}
                        alt="nti"
                        width={200}
                        height={200}
                        >
                    </Image>
                </a>
            </Container>
        </Center>
    </div>
  );
}