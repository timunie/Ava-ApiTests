# LockedFramebuffer Constructor


Initializes a new instance of the <a href="T_Avalonia_Platform_LockedFramebuffer">LockedFramebuffer</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public LockedFramebuffer(
	IntPtr address,
	PixelSize size,
	int rowBytes,
	Vector dpi,
	PixelFormat format,
	Action? onDispose
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	address As IntPtr,
	size As PixelSize,
	rowBytes As Integer,
	dpi As Vector,
	format As PixelFormat,
	onDispose As Action
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        address : IntPtr * 
        size : PixelSize * 
        rowBytes : int * 
        dpi : Vector * 
        format : PixelFormat * 
        onDispose : Action -> LockedFramebuffer
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/LockedFramebuffer.cs#L9" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_LockedFramebuffer">LockedFramebuffer Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

