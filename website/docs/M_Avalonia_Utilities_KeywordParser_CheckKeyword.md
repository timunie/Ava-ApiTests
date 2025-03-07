# CheckKeyword Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool CheckKeyword(
	this ref CharacterReader r,
	string keyword
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function CheckKeyword ( 
	ByRef r As CharacterReader,
	keyword As String
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member CheckKeyword : 
        r : CharacterReader byref * 
        keyword : string -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/KeywordParser.cs#L11" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Utilities_CharacterReader">CharacterReader</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Utilities_CharacterReader">CharacterReader</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_KeywordParser">KeywordParser Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
