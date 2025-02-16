---
title:GetMemberExpression&lt;T, TValue&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetMemberExpression&lt;T, TValue&gt; Method




## Definition
**Namespace:** <a href="N_Metsys_Bson_Configuration">Metsys.Bson.Configuration</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

**C#**
``` C#
public static MemberExpression GetMemberExpression<T, TValue>(
	this Expression<Func<T, TValue>> expression
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetMemberExpression(Of T, TValue) ( 
	expression As Expression(Of Func(Of T, TValue))
) As MemberExpression
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetMemberExpression : 
        expression : Expression<Func<'T, 'TValue>> -> MemberExpression 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression-1" target="_blank" rel="noopener noreferrer">Expression</a>(<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(T, TValue))</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.linq.expressions.memberexpression" target="_blank" rel="noopener noreferrer">MemberExpression</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression-1" target="_blank" rel="noopener noreferrer">Expression</a>(<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(T, TValue)). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Metsys_Bson_Configuration_ExpressionHelper">ExpressionHelper Class</a>  
<a href="N_Metsys_Bson_Configuration">Metsys.Bson.Configuration Namespace</a>  
