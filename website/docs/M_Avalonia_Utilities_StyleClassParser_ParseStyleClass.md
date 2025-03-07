# ParseStyleClass Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ReadOnlySpan<char> ParseStyleClass(
	this ref CharacterReader r
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ParseStyleClass ( 
	ByRef r As CharacterReader
) As ReadOnlySpan(Of Char)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ParseStyleClass : 
        r : CharacterReader byref -> ReadOnlySpan<char> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/StyleClassParser.cs#L12" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Utilities_CharacterReader">CharacterReader</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1" target="_blank" rel="noopener noreferrer">ReadOnlySpan</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Utilities_CharacterReader">CharacterReader</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_StyleClassParser">StyleClassParser Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
