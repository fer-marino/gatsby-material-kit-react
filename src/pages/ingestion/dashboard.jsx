import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

import Face from "@material-ui/core/SvgIcon/SvgIcon"
import CustomTabs from "../../components/CustomTabs/CustomTabs"
import { Build, Chat } from "@material-ui/icons"
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Footer from "../../components/Footer/Footer"
import classNames from "classnames"


import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class IngestionDashboard extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand="UMARF"
          rightLinks={<HeaderLinks/>}
          color={"dark"}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <br/><br/>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <div id="nav-tabs">
              <h3>
                <small>Tabs with Icons on Card</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Profile",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because
                        I got the answers. I understand culture. I am the
                        nucleus. I think that’s a responsibility that I have,
                        to push possibilities, to show people, this is the
                        level that things could be at.
                      </p>
                    ),
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <Footer/>
      < /div>
    );
  }
}

export default withStyles(componentsStyle)(IngestionDashboard);