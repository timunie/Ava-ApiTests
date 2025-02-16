---
title:ToTransient&lt;TImpl&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ToTransient&lt;TImpl&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public AvaloniaLocator ToTransient<TImpl>()
where TImpl : class, new(), TService

```
**VB**
``` VB
Public Function ToTransient(Of TImpl As {Class, New, TService}) As AvaloniaLocator
```
**F#**
``` F#
member ToTransient : unit -> AvaloniaLocator  when 'TImpl : not struct, new() and 'TService
```



#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaLocator">AvaloniaLocator</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaLocator_RegistrationHelper_1">AvaloniaLocator.RegistrationHelper(TService) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
