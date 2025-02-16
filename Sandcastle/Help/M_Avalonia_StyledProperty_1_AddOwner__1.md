---
title:AddOwner&lt;TOwner&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddOwner&lt;TOwner&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public StyledProperty<TValue> AddOwner<TOwner>(
	StyledPropertyMetadata<TValue>? metadata = null
)
where TOwner : AvaloniaObject

```
**VB**
``` VB
Public Function AddOwner(Of TOwner As AvaloniaObject) ( 
	Optional metadata As StyledPropertyMetadata(Of TValue) = Nothing
) As StyledProperty(Of TValue)
```
**F#**
``` F#
member AddOwner : 
        ?metadata : StyledPropertyMetadata<'TValue> 
(* Defaults:
        let _metadata = defaultArg metadata null
*)
-> StyledProperty<'TValue>  when 'TOwner : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>)  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>)

## See Also


#### Reference
<a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
