# Bind(AvaloniaObject, AvaloniaProperty, IBinding, Object) Method
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Binds a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")]
public static IDisposable Bind(
	this AvaloniaObject target,
	AvaloniaProperty property,
	IBinding binding,
	Object? anchor = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
<ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")>
Public Shared Function Bind ( 
	target As AvaloniaObject,
	property As AvaloniaProperty,
	binding As IBinding,
	Optional anchor As Object = Nothing
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
[<ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")>]
static member Bind : 
        target : AvaloniaObject * 
        property : AvaloniaProperty * 
        binding : IBinding * 
        ?anchor : Object 
(* Defaults:
        let _anchor = defaultArg anchor null
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObjectExtensions.cs#L246" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property to bind.</dd><dt>  <a href="T_Avalonia_Data_IBinding">IBinding</a></dt><dd>The binding.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  (Optional)</dt><dd>An optional anchor from which to locate required context. When binding to objects that are not in the logical tree, certain types of binding need an anchor into the tree in order to locate named controls or resources. The <em>anchor</em> parameter can be used to provide this context.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
An <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> which can be used to cancel the binding.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_Bind">Bind Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
