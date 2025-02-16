---
title:ToFunc&lt;TImlp&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ToFunc&lt;TImlp&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public AvaloniaLocator ToFunc<TImlp>(
	Func<TImlp> func
)
where TImlp : TService

```
**VB**
``` VB
Public Function ToFunc(Of TImlp As TService) ( 
	func As Func(Of TImlp)
) As AvaloniaLocator
```
**F#**
``` F#
member ToFunc : 
        func : Func<'TImlp> -> AvaloniaLocator  when 'TImlp : 'TService
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TImlp)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaLocator">AvaloniaLocator</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaLocator_RegistrationHelper_1">AvaloniaLocator.RegistrationHelper(TService) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
