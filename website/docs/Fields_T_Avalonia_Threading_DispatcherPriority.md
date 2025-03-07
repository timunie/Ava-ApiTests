# DispatcherPriority Fields




## Fields
<table>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ApplicationIdle">ApplicationIdle</a></td>
<td>The job will be processed when the application is idle.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_AsyncRenderTargetResize">AsyncRenderTargetResize</a></td>
<td>A special priority for platforms that resize the render target in asynchronous-ish matter, should be changed into event grouping in the platform backend render</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Background">Background</a></td>
<td>The job will be processed after other non-idle operations have completed.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_BeforeRender">BeforeRender</a></td>
<td>A special platform hook for jobs to be executed before the normal render cycle</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ContextIdle">ContextIdle</a></td>
<td>The job will be processed after background operations have completed.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Default">Default</a></td>
<td>The lowest foreground dispatcher priority</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Inactive">Inactive</a></td>
<td>A dispatcher priority for jobs that shouldn't be executed yet</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Input">Input</a></td>
<td>The job will be processed with the same priority as input.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Invalid">Invalid</a></td>
<td>Used internally in dispatcher code</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Loaded">Loaded</a></td>
<td>The job will be processed after layout and render but before input.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_MaxValue">MaxValue</a></td>
<td>Maximum possible priority</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Normal">Normal</a></td>
<td>The job will be processed with normal priority.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Render">Render</a></td>
<td>The job will be processed with the same priority as render.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Send">Send</a></td>
<td>The job will be processed before other asynchronous operations.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_SystemIdle">SystemIdle</a></td>
<td>The job will be processed when the system is idle.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_UiThreadRender">UiThreadRender</a></td>
<td>A special priority for platforms with UI render timer or for forced full rasterization requests</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority Structure</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
