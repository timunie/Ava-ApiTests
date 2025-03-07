# Cast&lt;T&gt; Method


Casts the type of an <a href="T_Avalonia_Data_Optional_1">Optional(T)</a> using only the C# cast operator.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Optional<T> Cast<T>(
	this Optional<Object> value
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function Cast(Of T) ( 
	value As Optional(Of Object)
) As Optional(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Cast : 
        value : Optional<Object> -> Optional<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Optional.cs#L161" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The binding value.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The target type.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Optional_1">Optional</a>(T)  
The cast value.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Data_OptionalExtensions">OptionalExtensions Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
