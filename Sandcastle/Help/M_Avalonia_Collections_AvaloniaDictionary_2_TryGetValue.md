---
title:TryGetValue Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetValue Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public bool TryGetValue(
	TKey key,
	out TValue value
)
```
**VB**
``` VB
Public Function TryGetValue ( 
	key As TKey,
	<OutAttribute> ByRef value As TValue
) As Boolean
```
**F#**
``` F#
abstract TryGetValue : 
        key : 'TKey * 
        value : 'TValue byref -> bool 
override TryGetValue : 
        key : 'TKey * 
        value : 'TValue byref -> bool 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TKey</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Collections_AvaloniaDictionary_2">TValue</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionary_2">AvaloniaDictionary(TKey, TValue) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
