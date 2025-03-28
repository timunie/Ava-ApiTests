# AttachDevTools(TopLevel, KeyGesture) Method


Attaches DevTools to a window, to be opened with the specified key gesture.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Diagnostics (in Avalonia.Diagnostics.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void AttachDevTools(
	this TopLevel root,
	KeyGesture gesture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Sub AttachDevTools ( 
	root As TopLevel,
	gesture As KeyGesture
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member AttachDevTools : 
        root : TopLevel * 
        gesture : KeyGesture -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Diagnostics/DevToolsExtensions.cs#L28" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a></dt><dd>The window to attach DevTools to.</dd><dt>  <a href="T_Avalonia_Input_KeyGesture">KeyGesture</a></dt><dd>The key gesture to open DevTools.</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions Class</a>  
<a href="Overload_Avalonia_DevToolsExtensions_AttachDevTools">AttachDevTools Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

