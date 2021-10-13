package com.example.csi_task;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private static int Splash_Screen=5000;
Animation top,bottom;
ImageView i;
TextView t;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);

        top= AnimationUtils.loadAnimation(getApplicationContext(),R.anim.top_animation);
        bottom=AnimationUtils.loadAnimation(getApplicationContext(),R.anim.bottom_animation);
        i=findViewById(R.id.imageView2);
        t=findViewById(R.id.textView);

        i.setAnimation(top);
        t.setAnimation(bottom);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent s=new Intent(getApplicationContext(),Dashboard.class);
                startActivity(s);
                finish();
            }
        },Splash_Screen);
    }
}