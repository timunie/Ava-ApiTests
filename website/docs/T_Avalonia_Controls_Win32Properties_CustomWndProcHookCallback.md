# Win32Properties.CustomWndProcHookCallback Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate IntPtr CustomWndProcHookCallback(
	IntPtr hWnd,
	uint msg,
	IntPtr wParam,
	IntPtr lParam,
	ref bool handled
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Function CustomWndProcHookCallback ( 
	hWnd As IntPtr,
	msg As UInteger,
	wParam As IntPtr,
	lParam As IntPtr,
	ByRef handled As Boolean
) As IntPtr
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CustomWndProcHookCallback = 
    delegate of 
        hWnd : IntPtr * 
        msg : uint32 * 
        wParam : IntPtr * 
        lParam : IntPtr * 
        handled : bool byref -> IntPtr
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Win32Properties.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

