import React from 'react';
import Layout from './Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let CategoryScreen = ({ categories }) =>
  <Layout>
    <ul>
      {
        categories.map(({ title, id }) =>
          <li>
            <Link to={`/categories/${id}`} title={title}>
              {title}
            </Link>
          </li>
        )
      }
    </ul>
  </Layout>

let mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(CategoryScreen);