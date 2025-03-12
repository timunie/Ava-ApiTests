# RemoveWndProcHookCallback Method


Removes a custom callback for the window's WndProc



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void RemoveWndProcHookCallback(
	TopLevel topLevel,
	Win32Properties.CustomWndProcHookCallback? callback
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub RemoveWndProcHookCallback ( 
	topLevel As TopLevel,
	callback As Win32Properties.CustomWndProcHookCallback
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RemoveWndProcHookCallback : 
        topLevel : TopLevel * 
        callback : Win32Properties.CustomWndProcHookCallback -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Win32Properties.cs#L68" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a></dt><dd>The window</dd><dt>  <a href="T_Avalonia_Controls_Win32Properties_CustomWndProcHookCallback">Win32Properties.CustomWndProcHookCallback</a></dt><dd>The callback</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Win32Properties">Win32Properties Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

