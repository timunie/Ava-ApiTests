# ThreadProxyRenderTimer Constructor


Initializes a new instance of the <a href="T_Avalonia_Rendering_ThreadProxyRenderTimer">ThreadProxyRenderTimer</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ThreadProxyRenderTimer(
	IRenderTimer inner,
	int maxStackSize = 1048576
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	inner As IRenderTimer,
	Optional maxStackSize As Integer = 1048576
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        inner : IRenderTimer * 
        ?maxStackSize : int 
(* Defaults:
        let _maxStackSize = defaultArg maxStackSize 1048576
*)
-> ThreadProxyRenderTimer
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/ThreadProxyRenderTimer.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_IRenderTimer">IRenderTimer</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_ThreadProxyRenderTimer">ThreadProxyRenderTimer Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
