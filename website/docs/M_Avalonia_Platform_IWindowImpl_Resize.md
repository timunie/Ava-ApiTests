# Resize Method


Sets the client size of the top level.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Resize(
	Size clientSize,
	WindowResizeReason reason = WindowResizeReason.Application
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Resize ( 
	clientSize As Size,
	Optional reason As WindowResizeReason = WindowResizeReason.Application
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Resize : 
        clientSize : Size * 
        ?reason : WindowResizeReason 
(* Defaults:
        let _reason = defaultArg reason WindowResizeReason.Application
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IWindowImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The new client size.</dd><dt>  <a href="T_Avalonia_Controls_WindowResizeReason">WindowResizeReason</a>  (Optional)</dt><dd>The reason for the resize.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
