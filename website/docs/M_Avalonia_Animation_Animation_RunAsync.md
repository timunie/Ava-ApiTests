# RunAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task RunAsync(
	Animatable control,
	CancellationToken cancellationToken = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function RunAsync ( 
	control As Animatable,
	Optional cancellationToken As CancellationToken = Nothing
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RunAsync : 
        control : Animatable * 
        ?cancellationToken : CancellationToken 
(* Defaults:
        let _cancellationToken = defaultArg cancellationToken new CancellationToken()
*)
-> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Animation.cs#L321" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Animation_Animatable">Animatable</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Animation_Animation">Animation Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

