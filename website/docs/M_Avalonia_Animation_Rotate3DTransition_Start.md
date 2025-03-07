# Start Method


Starts the animation.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override Task Start(
	Visual? from,
	Visual? to,
	bool forward,
	CancellationToken cancellationToken
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function Start ( 
	from As Visual,
	to As Visual,
	forward As Boolean,
	cancellationToken As CancellationToken
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Start : 
        from : Visual * 
        to : Visual * 
        forward : bool * 
        cancellationToken : CancellationToken -> Task 
override Start : 
        from : Visual * 
        to : Visual * 
        forward : bool * 
        cancellationToken : CancellationToken -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Transitions/Rotate3DTransition.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The control that is being transitioned away from. May be null.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The control that is being transitioned to. May be null.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If the animation is bidirectional, controls the direction of the animation.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a></dt><dd>Animation cancellation.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
A <a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that tracks the progress of the animation.

#### Implements
<a href="M_Avalonia_Animation_IPageTransition_Start">IPageTransition.Start(Visual, Visual, Boolean, CancellationToken)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Animation_Rotate3DTransition">Rotate3DTransition Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
