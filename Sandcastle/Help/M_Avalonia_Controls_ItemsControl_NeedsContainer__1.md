---
title:NeedsContainer&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# NeedsContainer&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
protected bool NeedsContainer<T>(
	Object? item,
	out Object?? recycleKey
)
where T : Control

```
**VB**
``` VB
Protected Function NeedsContainer(Of T As Control) ( 
	item As Object,
	<OutAttribute> ByRef recycleKey As Object
) As Boolean
```
**F#**
``` F#
member NeedsContainer : 
        item : Object * 
        recycleKey : Object byref -> bool  when 'T : Control
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
