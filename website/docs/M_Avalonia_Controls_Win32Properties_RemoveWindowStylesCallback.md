# RemoveWindowStylesCallback Method


Removes a callback to set the window's style.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void RemoveWindowStylesCallback(
	TopLevel topLevel,
	Win32Properties.CustomWindowStylesCallback? callback
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub RemoveWindowStylesCallback ( 
	topLevel As TopLevel,
	callback As Win32Properties.CustomWindowStylesCallback
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RemoveWindowStylesCallback : 
        topLevel : TopLevel * 
        callback : Win32Properties.CustomWindowStylesCallback -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Win32Properties.cs#L41" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a></dt><dd>The window implementation</dd><dt>  <a href="T_Avalonia_Controls_Win32Properties_CustomWindowStylesCallback">Win32Properties.CustomWindowStylesCallback</a></dt><dd>The callback</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Win32Properties">Win32Properties Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
