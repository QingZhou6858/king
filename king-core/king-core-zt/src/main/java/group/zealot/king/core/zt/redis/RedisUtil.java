package group.zealot.king.core.zt.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.*;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.stereotype.Component;

@Component
public class RedisUtil {
    @Autowired
    private LettuceConnectionFactory connectionFactory;

    private RedisConnection redisConnection() {
        return connectionFactory.getConnection();
    }

    private JdkSerializationRedisSerializer serializer = new JdkSerializationRedisSerializer();

    public <K, V> RedisTemplate<K, V> redisTemplate() {
        RedisTemplate<K, V> template = new RedisTemplate<>();
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(serializer);
        template.setConnectionFactory(connectionFactory);
        template.afterPropertiesSet();
        return template;
    }

    public <K, V> RedisTemplate<K, V> redisTemplate(RedisSerializer keySerializer, RedisSerializer valueSerializer) {
        RedisTemplate<K, V> template = new RedisTemplate<>();
        template.setKeySerializer(keySerializer);
        template.setValueSerializer(valueSerializer);
        template.setConnectionFactory(connectionFactory);
        template.afterPropertiesSet();
        return template;
    }

    public byte[] serializer(Object object) {
        return serializer.serialize(object);
    }

    public Object deserialize(byte[] bytes) {
        return serializer.deserialize(bytes);
    }

    public <K, V> ZSetOperations<K, V> zSetOperations() {
        RedisTemplate<K, V> redisTemplate = redisTemplate();
        return redisTemplate.opsForZSet();
    }

    public <K, HK, HV> HashOperations<K, HK, HV> hashOperations() {
        RedisTemplate<K, HV> redisTemplate = redisTemplate();
        return redisTemplate.opsForHash();
    }

    public <K, V> ValueOperations<K, V> valueOperations() {
        RedisTemplate<K, V> template = redisTemplate();
        return template.opsForValue();
    }

    /**
     * 清空所有key【慎用】
     */
    public void flushAll() {
        RedisConnection redisConnection = redisConnection();
        redisConnection.flushAll();
    }

}
