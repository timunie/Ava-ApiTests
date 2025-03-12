# FindResource(IResourceHost, ThemeVariant, Object) Method


Finds the specified resource by searching up the logical tree and then global styles.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object? FindResource(
	this IResourceHost control,
	ThemeVariant? theme,
	Object key
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function FindResource ( 
	control As IResourceHost,
	theme As ThemeVariant,
	key As Object
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member FindResource : 
        control : IResourceHost * 
        theme : ThemeVariant * 
        key : Object -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceNodeExtensions.cs#L54" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a></dt><dd>The control.</dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd>Theme used to select theme dictionary.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The resource key.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The resource, or <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a> if not found.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_ResourceNodeExtensions_FindResource">FindResource Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

