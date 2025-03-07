# RunLoop Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RunLoop(
	CancellationToken token
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RunLoop ( 
	token As CancellationToken
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RunLoop : 
        token : CancellationToken -> unit 
override RunLoop : 
        token : CancellationToken -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ManagedDispatcherImpl.cs#L60" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a></dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Threading_IControlledDispatcherImpl_RunLoop">IControlledDispatcherImpl.RunLoop(CancellationToken)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_ManagedDispatcherImpl">ManagedDispatcherImpl Class</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
