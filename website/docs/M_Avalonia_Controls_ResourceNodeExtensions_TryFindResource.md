# TryFindResource(IResourceHost, Object, ThemeVariant, Object) Method


Tries to the specified resource by searching up the logical tree and then global styles.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryFindResource(
	this IResourceHost control,
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function TryFindResource ( 
	control As IResourceHost,
	key As Object,
	theme As ThemeVariant,
	<OutAttribute> ByRef value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member TryFindResource : 
        control : IResourceHost * 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceNodeExtensions.cs#L75" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a></dt><dd>The control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The resource key.</dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd>Theme used to select theme dictionary.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>On return, contains the resource if found, otherwise null.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the resource was found; otherwise false.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_ResourceNodeExtensions_TryFindResource">TryFindResource Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

