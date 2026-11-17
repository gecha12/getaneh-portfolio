import React from 'react';
import { Brain, Sparkles, Zap } from 'lucide-react';

export const MachineLearning: React.FC = () => {
  return (
    <section id="ai-ml">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Intelligent Systems</span>
          <h2 className="section-title">Artificial Intelligence &amp; Applied ML</h2>
          <p className="section-subtitle">
            Applying supervised predictive models, exploratory feature engineering, and intelligent inference pipelines to extract actionable value from complex data.
          </p>
        </div>

        {/* Machine Learning Pipeline Breakdown */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Brain className="text-hot-green" size={24} />
            My Machine Learning Workflow
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', marginBottom: '2rem', maxWidth: '820px' }}>
            From raw data extraction to reproducible model deployment, I emphasize explainable models, leak-free preprocessing, and rigorous validation metrics over black-box complexity.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Step 1 */}
            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-hot-green)', marginBottom: '0.4rem' }}>
                STAGE 01
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Data Preprocessing &amp; EDA</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Handling missing features, outlier detection, numerical scaling (StandardScaler/MinMax), and categorical one-hot encoding with Pandas &amp; NumPy.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', marginBottom: '0.4rem' }}>
                STAGE 02
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Model Training &amp; Benchmarking</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Evaluating Decision Trees, Random Forests, Support Vector Machines, and Logistic Classifiers using stratified k-fold cross-validation.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-hot-green)', marginBottom: '0.4rem' }}>
                STAGE 03
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Evaluation &amp; Attribution</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Assessing precision, recall, F1-score, and confusion matrices. Calculating feature importance to give users explainable decision factors.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', marginBottom: '0.4rem' }}>
                STAGE 04
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>API Inference Service</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Serializing models (joblib) and exposing low-latency inference endpoints via FastAPI with asynchronous request handling and Pydantic validation.
              </p>
            </div>
          </div>
        </div>

        {/* Practical Application Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Zap className="text-hot-green" size={20} />
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff' }}>Student Trajectory Prediction (EduTrack)</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              Trained on multi-dimensional academic metrics (attendance, homework, midterm milestones) to classify students at academic risk with &gt;87% test accuracy, surfacing top risk factors for early instructor intervention.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span className="tech-tag">Scikit-Learn</span>
              <span className="tech-tag">Random Forests</span>
              <span className="tech-tag">ROC-AUC Analysis</span>
              <span className="tech-tag">FastAPI</span>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Sparkles className="text-emerald" size={20} />
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff' }}>Clinical History Summarization (MedLens)</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              Designing an isolated summarization pipeline to extract timeline highlights (allergies, chronic conditions, prior medications) from unstructured physician consultation notes during emergency triage.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span className="tech-tag">NLP Pipelines</span>
              <span className="tech-tag">LLM Prompt Engineering</span>
              <span className="tech-tag">Clinical Privacy</span>
              <span className="tech-tag">Pydantic Schemas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
