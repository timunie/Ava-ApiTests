# TakeWhile Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ReadOnlySpan<char> TakeWhile(
	Func<char, bool> condition
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TakeWhile ( 
	condition As Func(Of Char, Boolean)
) As ReadOnlySpan(Of Char)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TakeWhile : 
        condition : Func<char, bool> -> ReadOnlySpan<char> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/CharacterReader.cs#L74" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1" target="_blank" rel="noopener noreferrer">ReadOnlySpan</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)

## See Also


#### Reference
<a href="T_Avalonia_Utilities_CharacterReader">CharacterReader Structure</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

