---
title:AutoCompleteFilterPredicate&lt;T&gt; Delegate
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AutoCompleteFilterPredicate&lt;T&gt; Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public delegate bool AutoCompleteFilterPredicate<T>(
	string? search,
	T item
)

```
**VB**
``` VB
Public Delegate Function AutoCompleteFilterPredicate(Of T) ( 
	search As String,
	item As T
) As Boolean
```
**F#**
``` F#
type AutoCompleteFilterPredicate = 
    delegate of 
        search : string * 
        item : 'T -> bool
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  T</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
