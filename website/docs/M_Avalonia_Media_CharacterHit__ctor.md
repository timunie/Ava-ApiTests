# CharacterHit Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> structure.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CharacterHit(
	int firstCharacterIndex,
	int trailingLength = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	firstCharacterIndex As Integer,
	Optional trailingLength As Integer = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        firstCharacterIndex : int * 
        ?trailingLength : int 
(* Defaults:
        let _trailingLength = defaultArg trailingLength 0
*)
-> CharacterHit
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/CharacterHit.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Index of the first character that got hit.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>In the case of a leading edge, this value is 0. In the case of a trailing edge, this value is the number of code points until the next valid caret position.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_CharacterHit">CharacterHit Structure</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

