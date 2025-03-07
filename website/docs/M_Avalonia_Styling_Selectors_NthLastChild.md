# NthLastChild Method


The :nth-child() pseudo-class matches elements based on their position among a group of siblings, counting from the end.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Selector NthLastChild(
	this Selector? previous,
	int step,
	int offset
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function NthLastChild ( 
	previous As Selector,
	step As Integer,
	offset As Integer
) As Selector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member NthLastChild : 
        previous : Selector * 
        step : int * 
        offset : int -> Selector 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selectors.cs#L151" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_Selector">Selector</a></dt><dd>Previous selector.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Position step.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Initial index offset, counting from the end.</dd></dl>

#### Return Value
<a href="T_Avalonia_Styling_Selector">Selector</a>  
The selector.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Styling_Selector">Selector</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.Element indices are 1-based.

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selectors">Selectors Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
