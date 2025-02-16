---
title:GetTextBounds Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetTextBounds Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract IReadOnlyList<TextBounds> GetTextBounds(
	int firstTextSourceCharacterIndex,
	int textLength
)
```
**VB**
``` VB
Public MustOverride Function GetTextBounds ( 
	firstTextSourceCharacterIndex As Integer,
	textLength As Integer
) As IReadOnlyList(Of TextBounds)
```
**F#**
``` F#
abstract GetTextBounds : 
        firstTextSourceCharacterIndex : int * 
        textLength : int -> IReadOnlyList<TextBounds> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_TextBounds">TextBounds</a>)

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
