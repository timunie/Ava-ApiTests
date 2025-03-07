# GetBaseValue&lt;T&gt;(AvaloniaObject, AvaloniaProperty&lt;T&gt;) Method


Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Optional<T> GetBaseValue<T>(
	this AvaloniaObject target,
	AvaloniaProperty<T> property
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetBaseValue(Of T) ( 
	target As AvaloniaObject,
	property As AvaloniaProperty(Of T)
) As Optional(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetBaseValue : 
        target : AvaloniaObject * 
        property : AvaloniaProperty<'T> -> Optional<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObjectExtensions.cs#L311" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(T)</dt><dd>The property.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Data_Optional_1">Optional</a>(T)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.For styled properties, gets the value of the property excluding animated values, otherwise <a href="P_Avalonia_Data_Optional_1_Empty">Empty</a>. Note that this method does not return property values that come from inherited or default values. For direct properties returns the current value of the property.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
