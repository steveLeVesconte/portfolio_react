export default function DockerWordpress() {
    return(
        <main className="project-main">
        <header className="project-header">
          <div className="project-heading-statement">
            <h1>Docker WordPress Professional Portal</h1>
            <h3>JUST ME</h3>
            <h2>(A previous version of this Site)</h2>
          </div>
        </header>
        <article className="project-article">
          <div className="article-container">
            <img src="/images/docker_ps-1024x304.png" alt="power shell"/>
            <div className="multi-col">
              <div className="left-col-33">
                <div className="p-title">SCOPE OF THE PROJECT</div>
              </div>
              <div className="right-col-rest">
                <ul>
                  <li>Multiple local Docker Containers containing full WordPress sites installed using Docker Compose 
                    yaml file to facilitate learning and experimenting with WordPress.</li>
                  <li>Employed Duplicator WordPress Plugin to migrate this WordPress site to HostGator hosted liver 
                    WordPress site.</li>
                </ul>
              </div>
            </div>
            <img src="/images/wp_local-1024x713.png" alt="word press"/>
            <div className="multi-col">
              <div className="left-col-33">
                <div className="p-title">PROJECT SUMMARY</div>
              </div>
              <div className="right-col-rest">
                <p>In order to secure a free sandbox for WordPress research and Leaning projects, I used a Docker Compose 
                  file to create working environments including Linux, MySQL, phpMyAdmin, Apache and WordPress.</p>
                <p>The code below is the docker-compose.yaml file I used. Note that you can adjust the port settings to 
                  avoid conflicts with existing ports used on your system. In the example below phpMyAdmin is assigned to 
                  localhost:8085 and WordPress is assigned to localhost:8086.
                </p>
                <div className="code-container">
                  <div className="code">
    version: '3'
    
    services:
      # Database
      db:
        image: mysql:5.7
        volumes:
          - db_data:/var/lib/mysql
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: password
          MYSQL_DATABASE: wordpress
          MYSQL_USER: wordpress
          MYSQL_PASSWORD: wordpress
        networks:
          - wpsite
      # phpmyadmin
      phpmyadmin:
        depends_on:
          - db
        image: phpmyadmin/phpmyadmin
        restart: always
        ports:
          - '8085:80'
        environment:
          PMA_HOST: DB
          MYSQL_ROOT_PASSWORD: password
        networks:
          - wpsite
      # wordpress
      wordpress:
        depends_on:
          - db
        image: wordpress:latest
        ports:
          - '8086:80'
        restart: always
        volumes: ['./:/var/www/html']
        environment:
          WORDPRESS_DB_HOST: db:3306      
          WORDPRESS_DB_USER: wordpress
          WORDPRESS_DB_PASSWORD: wordpress
        networks:
          - wpsite
    networks:
      wpsite:
    volumes:
      db_data:
                  </div>
                </div>
              </div>
            </div>
            <p>The code above is based largely on Brad Traversy’s video “Quick WordPress Setup with Docker” (see below).  Many thanks to Brad!</p>
              <div className="wp-block-embed__wrapper">
            <iframe loading="lazy" title="Quick WordPress Setup With Docker" width="900" height="500px" src="https://www.youtube.com/embed/pYhLEV-sRpY?feature=oembed"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
          </div>
        </article>
      </main>
    )
    }