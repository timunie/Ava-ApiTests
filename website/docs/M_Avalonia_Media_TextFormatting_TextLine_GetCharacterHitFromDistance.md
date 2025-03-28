# GetCharacterHitFromDistance Method


Gets the character hit corresponding to the specified distance from the beginning of the line.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract CharacterHit GetCharacterHitFromDistance(
	double distance
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function GetCharacterHitFromDistance ( 
	distance As Double
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetCharacterHitFromDistance : 
        distance : float -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>A <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> value that represents the distance from the beginning of the line.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> object at the specified distance from the beginning of the line.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

